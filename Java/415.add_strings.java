// z
class Solution {
    public String addStrings(String num1, String num2) {
        StringBuilder sb  = new StringBuilder();

        int lengthOfNum1 = num1.length() - 1;
        int lengthOfNum2 = num2.length() - 1;
        int carryOne = 0;

        while (lengthOfNum1 >= 0 || lengthOfNum2 >= 0) {
            int numberInNum1 = lengthOfNum1 < 0 ? 0 : num1.charAt(lengthOfNum1--) - '0';
            int numberInNum2 = lengthOfNum2 < 0 ? 0 : num2.charAt(lengthOfNum2--) - '0';

            int sum = numberInNum1 + numberInNum2 + carryOne;
            if (sum >= 10) {
                sum -= 10;
                carryOne = 1;
            } else {
                carryOne = 0;
            }
            sb.append(sum);
        }

        if (carryOne == 1) sb.append("1");
        return sb.reverse().toString();

    }
}