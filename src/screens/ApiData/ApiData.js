import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';

export const GetMoviesLatest = async () => {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    params: {year: '2023'},
    headers: {
      'X-RapidAPI-Key': '6cf18ef040msh27de3da45cac4aap143ae2jsn18c2bd76231a',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
