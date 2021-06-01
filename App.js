import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Card, Button,Title,Paragraph,Avatar } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title:'Title 1',
    subtitle:'sub1',
    uri:'https://picsum.photos/700'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title:'Title 2',
    subtitle:'sub2',
    uri:'https://i.picsum.photos/id/43/700/700.jpg?hmac=xfCBMa5V4DHe-DsNidhgUIHahbHZ0VDN2urMfuN23WE'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title:'Title 3',
    subtitle:'sub3',
    uri:'https://i.picsum.photos/id/131/700/700.jpg?hmac=QkwK8WOAy1h77HVEGfiHIS-69ldfkpC5DiK763TR8_I'
  },
];

const Item = ({ title, uri }) => (
  <Card>
  <Card.Title title={title} subtitle="Card Subtitle" left={LeftContent} />
  <Card.Content>
    <Title>Card title</Title>
    <Paragraph>Card content</Paragraph>
  </Card.Content>
  <Card.Cover source={{uri: uri}} />
  <Card.Actions>
    <Button>Cancel</Button>
    <Button>Ok</Button>
  </Card.Actions>
</Card>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} uri ={item.uri} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;