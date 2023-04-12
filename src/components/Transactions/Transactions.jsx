import PropTypes from 'prop-types';
import {
  TransactionsTable, 
  Thead,
  ColumTitle,
  Title,
  BodyTable,
  Body,
  BodyElement,
} from './Transactions.styled';
export function Transactions({ items }) {
    return (
      <TransactionsTable>
        <Thead>
          <ColumTitle>
            <Title>Type</Title>
            <Title>Amount</Title>
            <Title>Currency</Title>
          </ColumTitle>
        </Thead>
  
        <BodyTable>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <Body key={id}>
                <BodyElement>{type}</BodyElement>
                <BodyElement>{amount}</BodyElement>
                <BodyElement>{currency}</BodyElement>
              </Body>
            );
          })}
        </BodyTable>
      </TransactionsTable>
    );
  }
  
  Transactions.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };