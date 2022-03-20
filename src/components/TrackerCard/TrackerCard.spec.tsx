import { render, screen } from '@testing-library/react';
import { subDays } from 'date-fns';
import TrackerStatus from '../../models/TrackerStatus';
import formatDate from '../../utils/formatDate';
import { Provider } from 'react-redux';
import { createTestStore } from '../../store/createTestStore';
import TrackerCard from './TrackerCard';
import { v4 } from 'uuid';
import { SnackbarProvider } from 'notistack';

const tracker1 = {
  id: v4(),
  beginDate: subDays(new Date(), 3).toString(),
  duration: 13,
  name: 'Musculation',
  remainingDays: 10,
  requiredCompletions: [
    {
      quantity: 10,
      unit: 'push-ups'
    },
    {
      quantity: 15,
      unit: 'squats'
    }
  ],
  status: TrackerStatus.active,
  entries: []
};
const setup = () =>
  // TODO: refactor Providers elsewhere
  render(
    <Provider store={createTestStore()}>
      <SnackbarProvider>
        <TrackerCard tracker={tracker1} />
      </SnackbarProvider>
    </Provider>
  );

describe('<TrackerCard />', () => {
  it('shows tracker informations', () => {
    setup();
    const { beginDate, name, remainingDays, requiredCompletions } = tracker1;
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText('Reste ' + remainingDays + ' jours')).toBeInTheDocument();
    expect(screen.getByText('Commencé le ' + formatDate(new Date(beginDate)))).toBeInTheDocument();
    for (const completion of requiredCompletions) {
      const { quantity, unit } = completion;
      expect(screen.getByText(quantity + ' ' + unit)).toBeInTheDocument();
    }
  });
});
