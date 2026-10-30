import { createContext, useEffect, useRef, useState } from 'react';
import { StatusBar } from 'react-native';

import LoadingScreen from '../components/LoadingScreen';
import { readStoredValue, STORAGE_KEYS, writeStoredValue } from '../storage/appStorage';

export const ThemeContext = createContext(null);

const lightColors = {
  background: '#ffffff',
  surface: '#f1f5f9',
  text: '#0f172a',
  secondaryText: '#475569',
  primary: '#1d4ed8',
  border: '#cbd5e1',
  error: '#b91c1c',
};

const darkColors = {
  background: '#0f172a',
  surface: '#1e293b',
  text: '#f8fafc',
  secondaryText: '#cbd5e1',
  primary: '#93c5fd',
  border: '#64748b',
  error: '#fca5a5',
};

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light');
  const [hydrated, setHydrated] = useState(false);
  const [storageError, setStorageError] = useState(null);
  const lastRequestedValue = useRef('light');
  const isDark = themeMode === 'dark';
  const colors = isDark ? darkColors : lightColors;

  useEffect(() => {
    let active = true;
    async function hydrate() {
      const result = await readStoredValue(STORAGE_KEYS.THEME, 'light', (value) => value === 'light' || value === 'dark');
      if (!active) return;
      lastRequestedValue.current = result.value;
      setThemeMode(result.value);
      setStorageError(result.error);
      setHydrated(true);
    }
    hydrate();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    // Đọc xong mới được ghi; giá trị vừa khôi phục không cần ghi lại.
    if (!hydrated || lastRequestedValue.current === themeMode) return;
    lastRequestedValue.current = themeMode;
    let active = true;
    writeStoredValue(STORAGE_KEYS.THEME, themeMode).then((error) => {
      if (active) setStorageError(error);
    });
    return () => { active = false; };
  }, [themeMode, hydrated]);

  function toggleTheme() {
    setThemeMode((previousMode) => previousMode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ themeMode, isDark, colors, toggleTheme, storageError }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {hydrated ? children : <LoadingScreen colors={colors} message="Đang đọc giao diện đã lưu…" />}
    </ThemeContext.Provider>
  );
}
