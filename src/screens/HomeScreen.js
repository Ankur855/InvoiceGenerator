import {
  View,
  Text,
  Pressable,
  Alert,
  Image,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import axios from 'axios';
import ImageSlider from 'react-native-image-slider';
import ApiData, {GetMoviesLatest} from './ApiData/ApiData';
const HomeScreen = ({navigation}) => {
  const [popularData, setpopularData] = useState();
  const [filterData, setFilterData] = useState();
  const [upcoming, setUpcoming] = useState();
  useEffect(() => {
    GetMoviesLatest().then(response => {
      setUpcoming(response.results);
      console.log(response.results, 'famous222');
    });
    getApiPopular();
    setTimeout(() => {
      FilterData();
    }, 4000);
  }, []);
  const getApiPopular = async () => {
    // navigation.navigate("Register")

    const options = {
      method: 'GET',
      url: 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites',
      params: {region: 'india'},
      headers: {
        'X-RapidAPI-Key': '6cf18ef040msh27de3da45cac4aap143ae2jsn18c2bd76231a',
        'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data.list);
      setpopularData(response.data.data.list);
      console.log(popularData);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({item, index}) => {
    console.log(item.primaryImage.url, 'hello');
    return (
      <View style={{flex: 1, height: 200, width: '100%', padding: 8}}>
        <Image
          source={{uri: item.primaryImage.url}}
          resizeMode="contain"
          style={{width: 200, height: 250}}></Image>
      </View>
    );
  };
  const FilterData = () => {
    var filterData1 = popularData?.map(item => {
      console.log(item.primaryImage.imageUrl);
      return item.primaryImage.imageUrl;
    });
    setFilterData(filterData1);
    console.log(filterData1, 'popular');
    var name = 'ankur';
  };

  return (
    <>
      <View style={{backgroundColor: '#030200', flex: 1}}>
        {filterData && (
          <View style={{flex: 0.4, padding: 8}}>
            <ImageSlider
              autoPlayWithInterval={5000}
              images={filterData}
              // customSlide={({ index, item, style, width }) => (
              //   // It's important to put style here because it's got offset inside
              //   <View key={index} style={{}}>
              //     <Image source={{ uri: item }} style={{ }} />
              //   </View>
              // )}
              customButtons={(position, move) => (
                <View style={{flex: 1}}>
                  {/* {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={{    margin: 3,
                      width: 8,
                      height: 8,
                      borderRadius: 8 / 2,
                      backgroundColor: '#ccc',
                      opacity: 0.9}}
                  >
                    <Text style={{}}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })} */}
                </View>
              )}
            />
          </View>
        )}

        <View style={{flex: 0.6}}>
          <View>
            <Text style={{color: 'white'}}>Upcoming Movies</Text>
          </View>

          <FlatList
            data={upcoming}
            renderItem={renderItem}
            style={{flex: 1}}
            horizontal={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={true}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
