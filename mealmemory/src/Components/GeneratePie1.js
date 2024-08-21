import React, { useState, useEffect, useCallback } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Input,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  Text,
} from "@chakra-ui/react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import foodData from "./FoodDataset";
import axios from "axios";
import ReactSelect from "react-select";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const GeneratePie1 = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [pieData, setPieData] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);
  const [savedCharts, setSavedCharts] = useState([]);
  const [chartToSave, setChartToSave] = useState(null);
  const [selectedChart, setSelectedChart] = useState(null);

  // Retrieve user email from local storage
  const userEmail = localStorage.getItem("userEmail");

  const foodOptions = foodData.map((food) => ({
    value: food.name,
    label: `${food.name} (${food.calories} cal per 100g)`,
  }));

  const handleGenerateChart = async () => {
    const selectedValues = selectedItems.map(item => item.value);
    const filteredData = foodData.filter((food) =>
      selectedValues.includes(food.name)
    );

    const aggregatedData = filteredData.reduce(
      (acc, curr) => {
        const quantityMultiplier = (quantities[curr.name] || 0) / 100;
        acc.totalFat += curr.totalFat * quantityMultiplier + curr.saturatedFat * quantityMultiplier;
        acc.carbs += curr.carbs * quantityMultiplier;
        acc.protein += curr.protein * quantityMultiplier;
        acc.calories += curr.calories * quantityMultiplier;
        return acc;
      },
      { totalFat: 0, carbs: 0, protein: 0, calories: 0 }
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
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };

    setPieData(data);
    setTotalCalories(aggregatedData.calories);
    setChartToSave({
      email: userEmail,
      name: selectedValues.join(", "),
      totalFat: aggregatedData.totalFat,
      carbs: aggregatedData.carbs,
      protein: aggregatedData.protein,
      calories: aggregatedData.calories,
    });
  };

  const handleStoreChart = async () => {
    if (chartToSave) {
      try {
        await axios.post(
          "http://localhost:5000/api/charts/save-chart",
          chartToSave
        );
        fetchSavedCharts();
      } catch (err) {
        console.error("Error storing data:", err);
      }
    }
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedItems(selectedOptions || []);
  };

  const handleQuantityChange = (foodName, value) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [foodName]: value,
    }));
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
        acc.calories += curr.calories;
        return acc;
      },
      { totalFat: 0, carbs: 0, protein: 0, calories: 0 }
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
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };

    setPieData(reportData);
    setTotalCalories(aggregatedData.calories);
  };

  return (
    <ChakraProvider>
      <Box bg="gray.50" p={8} maxW="container.xl">
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel fontWeight="bold">Select Food Items</FormLabel>
            <ReactSelect
              isMulti
              options={foodOptions}
              value={selectedItems}
              onChange={handleSelectChange}
              placeholder="Select food items..."
            />
          </FormControl>

          {selectedItems.map((item) => (
            <FormControl key={item.value}>
              <FormLabel fontWeight="bold">
                Quantity of {item.label} (in grams)
              </FormLabel>
              <Input
                type="number"
                placeholder="Enter quantity in grams"
                onChange={(e) => handleQuantityChange(item.value, e.target.value)}
                value={quantities[item.value] || ""}
              />
            </FormControl>
          ))}

          <HStack spacing={4} align="center" mt={4}>
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
          </HStack>

          {pieData && (
            <Box>
              <HStack spacing={4} align="center" mt={4}>
                <Box
                  w="100%"
                  maxW="500px"
                  h="500px"
                  borderWidth={1}
                  borderRadius="md"
                  bg="white"
                  boxShadow="md"
                >
                  <Pie data={pieData} />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="lg">
                    Total Calories: {totalCalories}
                  </Text>
                </Box>
              </HStack>
            </Box>
          )}

          <FormControl>
            <FormLabel fontWeight="bold">Select Saved Chart</FormLabel>
            <ChakraSelect placeholder="Select saved chart" onChange={(e) => {
              const selectedId = e.target.value;
              const chart = savedCharts.find(chart => chart._id === selectedId);
              setSelectedChart(chart);
            }}>
              {savedCharts.map((chart) => (
                <option key={chart._id} value={chart._id}>
                  {chart.name}
                </option>
              ))}
            </ChakraSelect>
          </FormControl>

          {selectedChart && (
            <Box
              mt={4}
              p={4}
              borderWidth={1}
              borderRadius="md"
              bg="gray.100"
              boxShadow="md"
            >
              <Text fontWeight="bold" mb={2}>Selected Chart: {selectedChart.name}</Text>
              <Text>Total Fat (incl. Saturated Fat): {selectedChart.totalFat}</Text>
              <Text>Carbohydrates: {selectedChart.carbs}</Text>
              <Text>Protein: {selectedChart.protein}</Text>
              <Text>Calories: {selectedChart.calories}</Text>
            </Box>
          )}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default GeneratePie1;
