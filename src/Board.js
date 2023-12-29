import { useEffect, useState } from 'react';
import { 
  View,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native'

const Cell = ({ value }) => {
  return (
    <View
      style={
        value === 0
        ? styles.cell
        : styles.activeCell
      }
    />
  );
}

const Row = ({ children }) => {
  return (
    <View style={styles.row}>{children}</View>
  )
}


const createLogicalGrid = () => {
  const columns = 10;
  const rows = 14;

  const logicalGrid = new Array(rows)
  .fill(null)
  .map(() => new Array(columns)
  .fill(0));

  return logicalGrid;
}

const Board = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const columns = 10;
    const rows = 14;
  
    const logicalGrid = new Array(rows)
      .fill(null)
      .map(() => new Array(columns)
      .fill(0));
    
    logicalGrid[1][1] = 1;  
    logicalGrid[2][1] = 1;  
    logicalGrid[3][1] = 1;  
    logicalGrid[4][1] = 1;  
    logicalGrid[5][1] = 1;  

    setGrid(logicalGrid);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Welcome To Metris</Text>
      {
        grid.length >= 0
        && grid.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {
              row.map((cell, cellIndex) =>
                <Cell 
                  key={`${rowIndex}, ${cellIndex}`} 
                  value={cell}
                />
              )
            }
          </Row>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071330',
    padding: 10
  },
  cell: {
    borderWidth: 1,
    borderColor: '#01949a',
    width: 35,
    height: 30,
  },
  activeCell: {
    borderWidth: 1,
    borderColor: '#01949a',
    width: 35,
    height: 30,
    backgroundColor: '#01949a'
  },
  row: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 1,
    marginBottom: 1
  }
})

export default Board;