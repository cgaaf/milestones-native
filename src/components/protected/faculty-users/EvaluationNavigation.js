import { StackNavigator } from 'react-navigation';

import StudentList from './StudentList';
import CompetencyChooser from './CompetencyChooser';
import EvaluationStack from './EvaluationStack';

import { stackNavigatorStyles as styles } from '../../../assets/styles';

const EvaluationNavigation = StackNavigator(
  {
    StudentList: {
      screen: StudentList,
      navigationOptions: ({ navigation }) => ({
        title: 'Choose a Student',
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }),
    },
    CompetencyChooser: {
      screen: CompetencyChooser,
      navigationOptions: ({ navigation }) => ({
        headerStyle: styles.headerStyle,
        headerTintColor: styles.headerTintColor,
      }),
    },
    EvaluationStack: {
      screen: EvaluationStack,
      navigationOptions: ({ navigation }) => ({
        headerStyle: styles.headerStyle,
        headerTintColor: styles.headerTintColor,
      }),
    },
  },
  {
    initialRouteParams: {
      isReview: false,
    },
  },
);

export default EvaluationNavigation;
