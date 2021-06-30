import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {useSelector} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import timeSince from "../utils/timeSince";

const Feed = ({singleFeed}) => {
  const PostedOn = timeSince(singleFeed.timeStamp);

  return (
    <View style={styles.feedWrap}>
      {singleFeed.uri && (
        <Image
          source={{
            uri: singleFeed.uri,
          }}
          style={styles.image}
        />
      )}
      <View style={styles.feedTextWrap}>
        <Text>{singleFeed.text}</Text>
        <Text style={styles.feedTime}>{PostedOn}</Text>
      </View>
    </View>
  );
};

const Home = ({navigation}) => {

  const feed = useSelector(state => state.feed);
  
  return (
    <View style={styles.container}>
      {feed.length !== 0 ? (
        <ScrollView>
          {feed.map((singleFeed, indx) => (
            <Feed key={indx} singleFeed={singleFeed} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.noPostTextWrap}>
          <Text>No posts</Text>
        </View>
      )}

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Icon name="add-circle-outline" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedWrap: {
    borderBottomWidth: 10,
    borderBottomColor: "#e6e6e6",
  },
  image: {
    height: 300,
  },
  feedTextWrap: {
    padding: 20,
  },
  feedTime: {
    color: "grey",
  },
  noPostTextWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e6e6",
  },
});

export default Home;
