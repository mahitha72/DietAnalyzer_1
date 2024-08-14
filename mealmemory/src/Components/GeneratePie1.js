import React, { useState, useEffect, useCallback } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Input,
  VStack,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import foodData from "./FoodDataset";
import axios from "axios";

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const GeneratePie1 = () => {
  const [selectedItems, setSelectedItems] = useState("");
  const [pieData, setPieData] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);
  const [savedCharts, setSavedCharts] = useState([]);
  const [chartToSave, setChartToSave] = useState(null);
  const [selectedChart, setSelectedChart] = useState(null);

  // Retrieve user email from local storage
  const userEmail = localStorage.getItem("userEmail");

  const handleGenerateChart = async () => {
    const selected = selectedItems.split(",").map((item) => item.trim());
    const filteredData = foodData.filter((food) =>
      selected.includes(food.name)
    );

    const aggregatedData = filteredData.reduce(
      (acc, curr) => {
        acc.totalFat += curr.totalFat + curr.saturatedFat;
        acc.carbs += curr.carbs;
        acc.protein += curr.protein;
        acc.calories += curr.calories;
        return acc;
      },
      { totalFat: 0, carbs: 0, protein: 0, calories:0 }
    );

    const data = {
      labels: ["Total Fat (incl. Saturated Fat)", "Carbohydrates", "Protein"],
      datasets: [
        {
          label: "Nutritional Values",
          data: [
            aggregatedData.totalFat,
            aggregatedData.carbs,
            aggregatedData.protein,
          ],
          backgroundColor: ["#F56565", "#68D391", "#4299E1"],
          hoverBackgroundColor: ["#E53E3E", "#48BB78", "#3182CE"],
        },
      ],
    };

    setPieData(data);
    setTotalCalories(aggregatedData.calories);
    setChartToSave({
      email: userEmail,
      name: selectedItems,
      totalFat: aggregatedData.totalFat,
      carbs: aggregatedData.carbs,
      protein: aggregatedData.protein,
      calories: aggregatedData.calories,
    });
  };

  const handleStoreChart = async () => {
    if (chartToSave) {
      try {
        console.log("Data to be sent to backend:", chartToSave); // Debug line to check data
        await axios.post(
          "http://localhost:5000/api/charts/save-chart",
          chartToSave
        );
        console.log("Data stored successfully");
        fetchSavedCharts();
      } catch (err) {
        console.error("Error storing data:", err);
      }
    } else {
      console.error("No chart data to store");
    }
  };

  const handleSelectChange = (event) => {
    const chartId = event.target.value;
    const chart = savedCharts.find((chart) => chart._id === chartId);
    setSelectedChart(chart);
  };

  const fetchSavedCharts = useCallback(async () => {
    if (userEmail) {
      try {
        const response = await axios.get("http://localhost:5000/api/charts", {
          params: { email: userEmail },
        });
        setSavedCharts(response.data);
      } catch (err) {
        console.error("Error fetching charts:", err);
      }
    }
  }, [userEmail]);

  useEffect(() => {
    fetchSavedCharts();
  }, [fetchSavedCharts]);

  //new change
  const handleFetchWeeklyReport = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/charts/weekly-report",
        {
          params: { email: userEmail },
        }
      );
      displayReportData(response.data, "Weekly");
    } catch (err) {
      console.error("Error fetching weekly report:", err);
    }
  };
  const handleFetchMonthlyReport = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/charts/monthly-report",
        {
          params: { email: userEmail },
        }
      );
      displayReportData(response.data, "Monthly");
    } catch (err) {
      console.error("Error fetching monthly report:", err);
    }
  };
  const displayReportData = (data, reportType) => {
    if (data.length === 0) {
      alert(`No data found for ${reportType} report`);
      return;
    }

    const aggregatedData = data.reduce(
      (acc, curr) => {
        acc.totalFat += curr.totalFat;
        acc.carbs += curr.carbs;
        acc.protein += curr.protein;
        return acc;
      },
      { totalFat: 0, carbs: 0, protein: 0 }
    );

    const reportData = {
      labels: ["Total Fat (incl. Saturated Fat)", "Carbohydrates", "Protein"],
      datasets: [
        {
          label: `${reportType} Nutritional Values`,
          data: [
            aggregatedData.totalFat,
            aggregatedData.carbs,
            aggregatedData.protein,
          ],
          backgroundColor: ["#F56565", "#68D391", "#4299E1"],
          hoverBackgroundColor: ["#E53E3E", "#48BB78", "#3182CE"],
        },
      ],
    };

    setPieData(reportData);
  };

  return (
    <ChakraProvider>
      <VStack spacing={4} p={8}>
        <Input
          placeholder="Enter food items separated by commas (e.g., Apple,Cherry,Butternut)"
          value={selectedItems}
          onChange={(e) => setSelectedItems(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleGenerateChart}>
          Generate Pie Chart
        </Button>
        <Button
          colorScheme="blue"
          onClick={handleStoreChart}
          disabled={!chartToSave}
        >
          Store Chart
        </Button>
        <Button colorScheme="orange" onClick={handleFetchWeeklyReport}>
          Weekly Report
        </Button>
        <Button colorScheme="purple" onClick={handleFetchMonthlyReport}>
          Monthly Report
        </Button>

        {pieData && (
          <HStack spacing={4}>
          <Box w="300px" h="300px">
            <Pie data={pieData} />
          </Box>
          <Text fontWeight="bold" mt={2}>
            Total Calories:{totalCalories}
          </Text>
          </HStack>
        )}
        <Select placeholder="Select saved chart" onChange={handleSelectChange}>
          {savedCharts.map((chart) => (
            <option key={chart._id} value={chart._id}>
              {chart.name}
            </option>
          ))}
        </Select>
        {selectedChart && (
          <Box mt={4} p={4} borderWidth={1} borderRadius="md">
            <Text fontWeight="bold">Chart Details:</Text>
            <Text>Name: {selectedChart.name}</Text>
            <Text>Total Fat: {selectedChart.totalFat}</Text>
            <Text>Carbohydrates: {selectedChart.carbs}</Text>
            <Text>Protein: {selectedChart.protein}</Text>
            <Text>Calories: {selectedChart.calories}</Text>
          </Box>
        )}
      </VStack>
    </ChakraProvider>
  );
};

export default GeneratePie1;
