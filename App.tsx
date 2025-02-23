import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			{/* Your app content */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111', // Set the background color here
		alignItems: 'center',
		justifyContent: 'center',
	},
});
