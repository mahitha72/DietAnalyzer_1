import React, { useState, useEffect, useCallback } from 'react';
import { ChakraProvider, Box, Button, Input, VStack, Select, Text } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import axios from 'axios';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const foodData = [
  // Your food data here
  { name: 'Apple', totalFat: 0.3, saturatedFat: 0.1, carbs: 25, protein: 0.5 },
  { name: 'Cherry', totalFat: 0.2, saturatedFat: 0.1, carbs: 16, protein: 1.0 },
  { name: 'Butternut', totalFat: 0.2, saturatedFat: 0.1, carbs: 12, protein: 1.5 },
  { name: 'Meat', totalFat: 1, saturatedFat: 0.1, carbs: 2, protein: 5 },
  { name: 'Egg', totalFat: 0.2, saturatedFat: 0.1, carbs: 16, protein: 1.0 },
  { name: 'Bacon', totalFat: 0.2, saturatedFat: 0.1, carbs: 12, protein: 1.5 },
];

const GeneratePie = () => {
  const [selectedItems, setSelectedItems] = useState('');
  const [pieData, setPieData] = useState(null);
  const [savedCharts, setSavedCharts] = useState([]);
  const [chartToSave, setChartToSave] = useState(null);
  const [selectedChart, setSelectedChart] = useState(null);

  // Retrieve user email from local storage
  const userEmail = localStorage.getItem('userEmail');

  const handleGenerateChart = async () => {
    const selected = selectedItems.split(',').map(item => item.trim());
    const filteredData = foodData.filter(food => selected.includes(food.name));

    const aggregatedData = filteredData.reduce(
      (acc, curr) => {
        acc.totalFat += curr.totalFat + curr.saturatedFat;
        acc.carbs += curr.carbs;
        acc.protein += curr.protein;
        return acc;
      },
      { totalFat: 0, carbs: 0, protein: 0 }
    );

    const data = {
      labels: ['Total Fat (incl. Saturated Fat)', 'Carbohydrates', 'Protein'],
      datasets: [
        {
          label: 'Nutritional Values',
          data: [aggregatedData.totalFat, aggregatedData.carbs, aggregatedData.protein],
          backgroundColor: ['#F56565', '#68D391', '#4299E1'],
          hoverBackgroundColor: ['#E53E3E', '#48BB78', '#3182CE'],
        },
      ],
    };

    setPieData(data);
    setChartToSave({
      email: userEmail,
      name: selectedItems,
      totalFat: aggregatedData.totalFat,
      carbs: aggregatedData.carbs,
      protein: aggregatedData.protein,
    });
  };

  const handleStoreChart = async () => {
    if (chartToSave) {
      try {
        console.log('Data to be sent to backend:', chartToSave); // Debug line to check data
        await axios.post('http://localhost:5000/api/charts/save-chart', chartToSave);
        console.log('Data stored successfully');
        fetchSavedCharts();
      } catch (err) {
        console.error('Error storing data:', err);
      }
    } else {
      console.error('No chart data to store');
    }
  };

  const handleSelectChange = (event) => {
    const chartId = event.target.value;
    const chart = savedCharts.find(chart => chart._id === chartId);
    setSelectedChart(chart);
  };

  const fetchSavedCharts = useCallback(async () => {
    if (userEmail) {
      try {
        const response = await axios.get('http://localhost:5000/api/charts', {
          params: { email: userEmail }
        });
        setSavedCharts(response.data);
      } catch (err) {
        console.error('Error fetching charts:', err);
      }
    }
  }, [userEmail]);

  useEffect(() => {
    fetchSavedCharts();
  }, [fetchSavedCharts]);

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
        <Button colorScheme="blue" onClick={handleStoreChart} disabled={!chartToSave}>
          Store Chart
        </Button>
        {pieData && (
          <Box w="300px" h="300px">
            <Pie data={pieData} />
          </Box>
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
          </Box>
        )}
      </VStack>
    </ChakraProvider>
  );
};

export default GeneratePie;
