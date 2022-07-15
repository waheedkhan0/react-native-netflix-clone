
import styles from './styles';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootStackParamList, RootTabScreenProps } from '../../types';

export default function GameScreen({ navigation }: RootTabScreenProps<'Games'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 2</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/GamesScreen" />
    </View>
  );
}


