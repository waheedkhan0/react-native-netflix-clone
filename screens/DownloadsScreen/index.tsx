import { StyleSheet } from 'react-native';
import styles from './styles';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function DownloadsScreen({ navigation }: RootTabScreenProps<'Downloads'>) {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Home Tab</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="/screens/HomeScreen" />
        </View>
      );
}