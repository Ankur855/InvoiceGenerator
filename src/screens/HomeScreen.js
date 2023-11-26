import { View, Text, Pressable, Alert,Image,TouchableHighlight} from 'react-native'
import React, { useEffect,useState } from 'react'
import { TouchableOpacity } from 'react-native'
import axios from "axios";
import ImageSlider from 'react-native-image-slider';
const HomeScreen = ({ navigation }) => {
  const [popularData,setpopularData]=useState()
  const [filterData,setFilterData]=useState()
  useEffect(() => {
    getApiPopular()
    setTimeout(() => {
      FilterData() 
    }, 4000);
   
  }, [])
  const images= [
    "https://m.media-amazon.com/images/M/MV5BYWRmZGVhMjgtNTQ5Mi00MDIxLWJiMmYtMWMxNzcyMmM5YjY5XkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZTQ3M2QxMTAtMmQ0Yi00YmVmLThkZGYtODBiN2NhNjBhYzcwXkEyXkFqcGdeQXVyMTY0MTg5OTM4._V1_.jpg",
    "https://i.ytimg.com/vi/EywX_uxreYA/maxresdefault.jpg",
    "https://i.ytimg.com/vi/EywX_uxreYA/maxresdefault.jpg",
  ]
  const getApiPopular = async() => {
    // navigation.navigate("Register")

const options = {
  method: 'GET',
  url: 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites',
  params: {region: 'india'},
  headers: {
    'X-RapidAPI-Key': '6cf18ef040msh27de3da45cac4aap143ae2jsn18c2bd76231a',
    'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.data.list);
  setpopularData(response.data.data.list)
} catch (error) {
	console.error(error);
}
  }
  const FilterData=()=>{
 var  filterData1=popularData.map((item)=>{
      console.log(item.primaryImage.imageUrl) 
      return item.primaryImage.imageUrl
    })
    setFilterData(filterData1)
    console.log(filterData1,"popular")
  }

  return (
  <>
<View style={{backgroundColor:'#030200',flex:1}}>
{filterData &&
<View style={{flex:.5,padding:8}}>
 
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
            <View style={{flex:1}}>
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
}

        <View>
          <View><Text>Upcoming Movies</Text></View>
        </View>
  </View>

  </>
  )
}

export default HomeScreen