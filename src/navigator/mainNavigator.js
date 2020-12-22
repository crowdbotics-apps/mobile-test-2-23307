import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings187715Navigator from '../features/Settings187715/navigator';
import CopyOfArticleList1184160Navigator from '../features/CopyOfArticleList1184160/navigator';
import ArticleList1184159Navigator from '../features/ArticleList1184159/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings187715: { screen: Settings187715Navigator },
CopyOfArticleList1184160: { screen: CopyOfArticleList1184160Navigator },
ArticleList1184159: { screen: ArticleList1184159Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
