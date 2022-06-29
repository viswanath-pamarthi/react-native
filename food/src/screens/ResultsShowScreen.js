import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from "react-native";

import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
    const [result, setResult] = useState(null);//expecting an object we can initialize to null
    const { id } = route.params;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    else {
        return (
            <View style={styles.view}>
                <Text>{result.name}</Text>
                <ScrollView>
                    <FlatList data={result.photos}
                        keyExtractor={(photo) => photo}
                        renderItem={({ item }) => {
                            return <Image style={styles.image} source={{ uri: item }} />
                        }} />
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;


/*Sample response for getting a restaurant by id
{
  "id": "WavvLdfdP6g8aZTtbBQHTw",
  "alias": "gary-danko-san-francisco",
  "name": "Gary Danko",
  "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
  "is_claimed": true,
  "is_closed": false,
  "url": "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=wpr6gw4FnptTrk1CeT8POg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=wpr6gw4FnptTrk1CeT8POg",
  "phone": "+14157492060",
  "display_phone": "(415) 749-2060",
  "review_count": 5296,
  "categories": [
    {
      "alias": "newamerican",
      "title": "American (New)"
    },
    {
      "alias": "french",
      "title": "French"
    },
    {
      "alias": "wine_bars",
      "title": "Wine Bars"
    }
  ],
  "rating": 4.5,
  "location": {
    "address1": "800 N Point St",
    "address2": "",
    "address3": "",
    "city": "San Francisco",
    "zip_code": "94109",
    "country": "US",
    "state": "CA",
    "display_address": [
      "800 N Point St",
      "San Francisco, CA 94109"
    ],
    "cross_streets": ""
  },
  "coordinates": {
    "latitude": 37.80587,
    "longitude": -122.42058
  },
  "photos": [
    "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/HZVDyYaghwPl2kVbvHuHjA/o.jpg"
  ],
  "price": "$$$$",
  "hours": [
    {
      "open": [
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 0
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 1
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 2
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 3
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 4
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 5
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 6
        }
      ],
      "hours_type": "REGULAR",
      "is_open_now": false
    }
  ],
  "transactions": [],
  "special_hours": [
    {
      "date": "2019-02-07",
      "is_closed": null,
      "start": "1600",
      "end": "2000",
      "is_overnight": false
    }
  ]
}
*/