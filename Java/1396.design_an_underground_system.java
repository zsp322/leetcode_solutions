// Space complexity : O(P + S^2)O(P+S 
// 2), where SS is the number of stations on the network, and PP is the number of passengers making a journey concurrently during peak time
class UndergroundSystem {
    HashMap<String, Pair<Integer, Integer>> checkoutMap = new HashMap<>(); // Route - {TotalTime, Count}
    HashMap<Integer, Pair<String, Integer>> checkInMap = new HashMap<>();  // Uid - {StationName, Time}
    
	public UndergroundSystem() {}
    
	public void checkIn(int id, String stationName, int t) {
        checkInMap.put(id, new Pair<>(stationName, t));
    }
    
	public void checkOut(int id, String stationName, int t) {
        Pair<String, Integer> checkIn = checkInMap.get(id);
        String route = checkIn.getKey() + "_" + stationName;
        int totalTime = t - checkIn.getValue();
        Pair<Integer, Integer> checkout = checkoutMap.getOrDefault(route, new Pair<>(0, 0));
        checkoutMap.put(route, new Pair<>(checkout.getKey() + totalTime, checkout.getValue() + 1));
    }
    
	public double getAverageTime(String startStation, String endStation) {
        String route = startStation + "_" + endStation;
        Pair<Integer, Integer> checkout = checkoutMap.get(route);
        return (double) checkout.getKey() / checkout.getValue();
    }
}