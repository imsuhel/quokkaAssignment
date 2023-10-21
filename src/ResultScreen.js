import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const ResultScreen = () => {
  const route = useRoute();
  const {testReport, totalQuestion} = route.params;
  return (
    <View style={internalStyle.wrapper}>
      <Text style={internalStyle.resultTxt}>
        Total Questions : {totalQuestion}
      </Text>
      <Text style={internalStyle.resultTxt}>
        {testReport.length > 0
          ? `out of ${totalQuestion} question ${testReport.length} question answers are right`
          : 'All attampt questiona are wrong'}
      </Text>
      <Text style={internalStyle.resultTxt}>
        {testReport.length > 0 ? `All Selected Options ${testReport}` : null}
      </Text>
    </View>
  );
};

export default ResultScreen;
const internalStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  resultTxt: {
    fontSize: 16,
    color: '#000',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});
