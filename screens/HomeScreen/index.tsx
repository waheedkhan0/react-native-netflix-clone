
import styles from './styles';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { Image,FlatList } from 'react-native';
import categories from '../../assets/data/categories';
import MovieCategory from '../../components/MovieCategory';
import { ScrollView } from 'react-native';

const firstCategory = categories.items[0]
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <ScrollView>
        <View style={styles.container}>
            { categories.items.map((item) => <MovieCategory key={item.id}  category={item} />)}
         
        </View>
        </ScrollView>
      );
}