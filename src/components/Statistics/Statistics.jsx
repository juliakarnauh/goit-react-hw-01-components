import PropTypes from 'prop-types';
import {
  StatisticsDiv, 
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';
export function generateColor() {
  let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  if(color != '#ffffff'){
  return color;}
}
export function Statistics({ stats }) {
    return (
      <StatisticsDiv>
        <Title>Upload stats</Title>
        <StatsList>
          {stats.map(item => (
            <StatsItem key={item.id} background-color={generateColor}>
              <Label> {item.label} </Label>
              <Percentage> {item.percentage} % </Percentage>
            </StatsItem>
          ))}
        </StatsList>
      </StatisticsDiv>
    );
  }
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };