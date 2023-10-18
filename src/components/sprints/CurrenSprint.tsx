import { Text, View } from "react-native";
import { CalendarCheck, CalendarPlus } from "lucide-react-native";
import { ProgressChart } from "react-native-chart-kit";

import { THEME } from "../../configs/theme";

export function CurrentSprint() {
  return (
    <View style={{ marginTop: 40, backgroundColor: THEME.secondary.darkGray, padding: 20, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ fontSize: 16, color: '#FFFFFF' }}>Sprint</Text>
        <Text style={{ fontSize: 14, color: '#FFFFFF50', marginTop: 8, }}>Resumo da sprint atual</Text>
        <View style={{ marginTop: 16 }}>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <CalendarPlus size={16} color='#FFFFFF50' />
            <Text style={{ color: '#FFF', marginLeft: 8, }}>{new Date().toLocaleDateString()}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <CalendarCheck size={16} color='#FFFFFF50' />
            <Text style={{ color: '#FFF', marginLeft: 8, }}>{new Date().toLocaleDateString()}</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ width: 110, height: 110, borderRadius: 55, overflow: 'hidden', position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
          <ProgressChart data={[0.25]} width={110} height={110} hideLegend radius={42} chartConfig={{
            // backgroundGradientFrom: THEME.secondary.dark,
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => `rgba(43, 204, 86, ${opacity})`,
          }} />
          <Text style={{ position: 'absolute', color: '#FFF' }}>25/100</Text>
        </View>
      </View>
    </View>
  )
}