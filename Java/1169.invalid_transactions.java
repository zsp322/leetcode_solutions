// Time: O(transactions.length^2), worst case is when all transactions have the same name and amounts are <=1000, for each we iterate through every transaction
// Space: O(transactions.length), worst case is when all transactions have a unique name so each of them has a separate entry in the map
public List<String> invalidTransactions(String[] transactions) {
    
    // map transaction name to all transactions with that name
    Map<String, List<String[]>> map = new HashMap<>(); 
    
    for (String currTransaction : transactions) {
        String[] splitTransaction = currTransaction.split(",");
        
        map.putIfAbsent(splitTransaction[0], new ArrayList<>());    // add list for the name if it doesn't exist
        
        map.get(splitTransaction[0]).add(splitTransaction);     // add current transaction to appropriate list
    }
    
    List<String> result = new ArrayList<>();
    
    // every loop checks if the currTransaction is invalid 
    for (String currTransaction : transactions) {
        String[] currSplitTransaction = currTransaction.split(",");
        
        if (Integer.parseInt(currSplitTransaction[2]) > 1000) {
            result.add(currTransaction);
            
        } else {
        
            // iterate through all transactions with the same name, check if within 60 minutes and different city
            for (String[] curr : map.get(currSplitTransaction[0])) {

                if (Math.abs(Integer.parseInt(currSplitTransaction[1]) - Integer.parseInt(curr[1])) <= 60 && !currSplitTransaction[3].equals(curr[3])) {
                    result.add(currTransaction);
                    break;
                }
            }
            
        }
        
    }
    
    return result;
}