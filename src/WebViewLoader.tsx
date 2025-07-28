import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
import { primaryRgb } from './config'

type Props = {
  progress: number
}

export const WebViewLoader = ({ progress }: Props) => {

  return (
    <View style={[StyleSheet.absoluteFill, styles.loadingContainer]} >
      <StatusBar backgroundColor='#F8F9FA' barStyle='dark-content' />

      {/* Contenedor de la animación */}
      < View style={styles.loadingContent} >
        <ActivityIndicator size='large' color={primaryRgb} />

        {/* Textos informativos */}
        <Text style={styles.loadingTitle} > Cargando aplicación </Text>
        <Text style={styles.loadingSubtitle} >
          {progress ? `${Math.round(progress * 100)}% completado` : 'Iniciando...'}
        </Text>
      </View>
    </View>
  )
}
// Estilos
const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContent: {
    alignItems: 'center',
    gap: 20,
  },
  loadingTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#343A40',
  },
  loadingSubtitle: {
    fontSize: 14,
    color: '#6C757D',
  },
});