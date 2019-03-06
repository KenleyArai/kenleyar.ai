// Loading.test.js
import React from 'react';
import Loading from 'components/Loading';
import renderer from 'react-test-renderer';

test('Loading', () => {
  const still_loading = renderer.create(<Loading />).toJSON();
  expect(still_loading).toMatchSnapshot();

  const done_loading = renderer.create(<Loading data={'some data'} />).toJSON();
  expect(done_loading).toMatchSnapshot();

  const failed_loader = renderer
    .create(<Loading failed={true} data={'Failed to load'} />)
    .toJSON();
  expect(failed_loader).toMatchSnapshot();
});
