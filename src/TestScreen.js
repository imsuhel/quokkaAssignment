import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import questionList from './utils/QuestionList';

const TestScreen = () => {
  const navigation = useNavigation();
  const [currentQues, setCurrentQues] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleQuestionChange = type => {
    if (type == 0) {
      currentQues !== 0 ? setCurrentQues(currentQues - 1) : null;
    } else {
      if (selected == null) {
        Alert.alert('wraning', 'Select an option.');
        return false;
      }
      currentQues !== questionList.length - 1
        ? setCurrentQues(currentQues + 1)
        : null;
    }
  };

  const handleSelect = selectedQes => {
    const oldSelected = [...selectedQuestions];

    if (selectedQes == questionList[currentQues].correctAnswer) {
      oldSelected.push(selectedQes);
    }

    setSelected(null);
    setSelectedQuestions(oldSelected);
  };

  const handleSubmit = () => {
    navigation.navigate('ResultScreen', {
      testReport: selectedQuestions,
      totalQuestion: questionList.length,
    });
    console.log(selectedQuestions);
  };

  return (
    <View style={internalStyle.wrapper}>
      <View style={internalStyle.questionContainer}>
        <View>
          <Text style={internalStyle.questionTxt}>
            {currentQues + 1} {questionList[currentQues].question}
          </Text>
          {questionList[currentQues].options.map((item, index) => (
            <Ripple
              onPress={() => {
                handleSelect(item);
                setSelected(item);
              }}
              style={[
                internalStyle.ansWrap,
                selected == item && internalStyle.selectedWrap,
              ]}>
              <Text
                style={[
                  internalStyle.answerTxt,
                  selected == item && internalStyle.selectedTxt,
                ]}>
                {index + 1}) {item}
              </Text>
            </Ripple>
          ))}
        </View>
        <View style={internalStyle.btnWrapper}>
          <Ripple
            onPress={() => handleQuestionChange(0)}
            style={[internalStyle.btnOutline, internalStyle.btnStyle]}>
            <Text style={[internalStyle.btnTxt, internalStyle.txtBlack]}>
              Prev {questionList.length + ' ' + currentQues}
            </Text>
          </Ripple>

          <Ripple
            onPress={() =>
              currentQues == questionList.length - 1
                ? handleSubmit()
                : handleQuestionChange(1)
            }
            style={[internalStyle.btnContain, internalStyle.btnStyle]}>
            <Text style={[internalStyle.btnTxt]}>
              {currentQues == questionList.length - 1 ? 'Submit' : 'Next'}
            </Text>
          </Ripple>
        </View>
      </View>
    </View>
  );
};

export default TestScreen;

const internalStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  questionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  btnStyle: {
    width: '48%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContain: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#000',
  },
  btnOutline: {
    borderWidth: 1,
    borderColor: '#000',
  },
  btnTxt: {
    fontSize: 14,
    color: '#fff',
  },
  txtBlack: {
    color: '#000',
  },
  questionTxt: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ansWrap: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#d8d8d8',
    marginBottom: 10,
  },
  answerTxt: {
    color: '#000',
    fontSize: 14,
  },
  selectedWrap: {
    backgroundColor: '#000',
  },
  selectedTxt: {
    color: '#fff',
  },
});
