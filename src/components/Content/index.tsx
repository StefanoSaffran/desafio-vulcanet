import React, { useState, useCallback, useEffect, FC, useMemo } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Plan from '../Plan';
import Attendant from '../Attendant';
import Footer from '../Footer';
import Loading from '../Loading';

import { Container, ButtonsContainer, Button, Plans } from './styles';

export interface IPlan {
  id: number;
  name: string;
  description: string;
  prices: {
    [key: string]: number;
  };
  features: Array<string>;
}

const Content: FC = () => {
  const [plans, setPlans] = useState<IPlan[]>([]);
  const [attendantPrice, setAttendantPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('Plano 2.0');

  useEffect(() => {
    api.get('plans').then(({ data }) => setPlans(data));
  }, []);

  useEffect(() => {
    api.get('attendant').then(({ data }) => setAttendantPrice(data.cost));
  }, []);

  const handleChangePeriod = useCallback(period => {
    setSelectedPeriod(period);
  }, []);

  const handleFinishContract = useCallback(() => {
    toast('Contrato realizado com sucesso!!', {
      position: 'top-right',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  const total = useMemo(() => {
    const planPrice = plans.find(plan => plan.name === selectedPlan);

    return (planPrice?.prices[selectedPeriod] || 0) + attendantPrice * quantity;
  }, [plans, selectedPeriod, selectedPlan, quantity, attendantPrice]);

  return total === 0 || attendantPrice === 0 ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <Container>
      <ButtonsContainer>
        <Button
          onClick={() => handleChangePeriod('monthly')}
          className={selectedPeriod === 'monthly' ? 'active' : ''}
        >
          Mensal
        </Button>
        <Button
          onClick={() => handleChangePeriod('yearly')}
          className={selectedPeriod === 'yearly' ? 'active' : ''}
        >
          Anual
        </Button>
      </ButtonsContainer>

      <Plans>
        {plans?.map(plan => (
          <Plan
            key={plan.id}
            plan={plan}
            selected={selectedPeriod}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        ))}
      </Plans>

      <Attendant
        attendantPrice={attendantPrice}
        quantity={quantity}
        setQuantity={setQuantity}
      />

      <Footer
        total={total}
        selectedPlan={selectedPlan}
        selectedPeriod={selectedPeriod}
        handleFinishContract={handleFinishContract}
      />
    </Container>
  );
};

export default Content;
