import java.util.Map;

class Solution {
    int i;
    public String countOfAtoms(String formula) {
        StringBuilder sb = new StringBuilder();
        i = 0;

        Map<String, Integer> count = parse(formula);

        for (String name : count.keySet()) {
            sb.append(name);
            int multiplicity = count.get(name);

            // K4
            if (multiplicity > 1) sb.append("" + multiplicity);
        }

        return new String(sb);
    }

    public Map<String, Integer> parse(String formula) {
        int N = formula.length();

        Map<String, Integer> count = new TreeMap();

        while (i < N && formula.charAt(i) != ')') {
            if (formula.charAt(i) == '(') {
                i++;

                for (Map.Entry<String, Integer> entry : parse(formula).entrySet()) {
                    count.put(entry.getKey(), 
                        count.getOrDefault(entry.getKey(), 0) + entry.getValue());
                }
            } else {
                int iStart = i++;

                while (i < N && Character.isLowerCase(formula.charAt(i))) {
                    i++; // Skip non-atomic character
                }

                String name = formula.substring(iStart, i);

                iStart = i;

                while (i < N && Character.isDigit(formula.charAt(i))) {
                    i++;
                }

                int multiplicity = iStart < i ? Integer.parseInt(formula.substring(iStart, i)) : 1;

                count.put(name, count.getOrDefault(name, 0) + multiplicity);
        }

        // 这里是处理) bracket after each grouped string H2O2)2 
        // 因为i作为全局变量，可以控制当前遍历到的位置

        int iStart = i++;

        while (i < N && Character.isDigit(formula.charAt(i))) i++;

        if (iStart < i) {
            int multiplicity = Integer.parseInt(formula.substring(iStart, i));

            for (String key : count.keySet()) {
                count.put(key, count.get(key) * multiplicity);
            }
        }

        return count;
    }
}

// K4(ON(SO3)2)2


// K:4
// ON(SO3)2)2
// O:1
// N:1

// SO3)2)2

