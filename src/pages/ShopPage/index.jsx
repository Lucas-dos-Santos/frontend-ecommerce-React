import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/Spinner';

const ColletionsOverviewContainer = lazy(() => import('../../components/CollectionsOverviewContainer'));
const ItemPageContainer = lazy(() => import('../../components/ItemPageContainer'));

function ShopPage({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={match.path}
          component={ColletionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:itemName`}
          component={ItemPageContainer}
        />
      </Suspense>
    </div>
  );
}

export default ShopPage;
