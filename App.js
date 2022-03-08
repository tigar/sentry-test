import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Sentry from '@sentry/react-native'

export default function App() {

  Sentry.init({
    dsn: 'DSN_GOES_HERE',
    enableInExpoDevelopment: true, // change to false before deploying
    release: '1.2.0',
    setCommits: true,
    enableNative: false,
    normalizeDepth: 10,
    logLevel: 3,
    debug: true // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
  })

  Sentry.captureException(new Error('Oops!'))

  return (
    <View style={styles.container}>
      <Text>This is a test</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
