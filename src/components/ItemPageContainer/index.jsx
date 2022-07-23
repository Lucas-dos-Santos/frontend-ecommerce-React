import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../WithSpinner';
import ItemPage from '../../pages/ItemPage';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsLoaded(state),
});

const ItemPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(ItemPage);

export default ItemPageContainer;
