import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import categories from '../assets/data/categories';
import MovieCategory from '../components/MovieCategory';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
       <ScrollView>
        <View style={styles.container}  >
            {categories.items.map(
                item => <MovieCategory key={item.id}  category={item}  />
                
            )}
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
