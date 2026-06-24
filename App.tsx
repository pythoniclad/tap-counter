import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Vibration,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);
  const isDark = useColorScheme() === 'dark';

  const increment = useCallback(() => {
    Vibration.vibrate(30);
    setCount(c => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(c => Math.max(0, c - 1));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const bg = isDark ? '#121212' : '#F5F5F5';
  const card = isDark ? '#1E1E1E' : '#FFFFFF';
  const text = isDark ? '#FFFFFF' : '#1A1A1A';
  const sub = isDark ? '#888888' : '#888888';

  return (
    <SafeAreaView style={[styles.safe, {backgroundColor: bg}]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={bg}
      />

      <View style={styles.container}>
        <Text style={[styles.title, {color: text}]}>Tap Counter</Text>

        <View style={[styles.card, {backgroundColor: card}]}>
          <Text style={[styles.label, {color: sub}]}>COUNT</Text>
          <Text style={[styles.count, {color: text}]}>{count}</Text>
        </View>

        <TouchableOpacity
          style={styles.tapBtn}
          onPress={increment}
          activeOpacity={0.8}>
          <Text style={styles.tapBtnText}>TAP</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.secondaryBtn, {backgroundColor: card}]}
            onPress={decrement}
            activeOpacity={0.7}>
            <Text style={[styles.secondaryBtnText, {color: text}]}>− 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.secondaryBtn, {backgroundColor: card}]}
            onPress={reset}
            activeOpacity={0.7}>
            <Text style={[styles.secondaryBtnText, {color: '#E53935'}]}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {flex: 1},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    paddingVertical: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 3,
    marginBottom: 8,
  },
  count: {
    fontSize: 80,
    fontWeight: '800',
    lineHeight: 90,
  },
  tapBtn: {
    backgroundColor: '#4CAF50',
    width: 160,
    height: 160,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4CAF50',
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  tapBtnText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  secondaryBtn: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  secondaryBtnText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
