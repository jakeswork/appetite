import styles from '../RestaurantCard/styles';
import { Theme } from '../../../../../../utils/theme';

export default (theme: Theme) => ({
  restaurantCard: styles(theme).restaurantCard
});

export type Classes = {
  restaurantCard: string;
};
