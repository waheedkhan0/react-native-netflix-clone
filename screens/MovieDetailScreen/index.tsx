
import styles from './styles';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { Image,FlatList } from 'react-native';
import categories from '../../assets/data/categories';
import MovieCategory from '../../components/MovieCategory';
import { ScrollView } from 'react-native';

export default function MovieDetailScreen ({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <ScrollView>
        <View style={styles.container}>
           <Text>This is Movie Details Screen</Text>
         
        </View>
        </ScrollView>
      );
}