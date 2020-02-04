//
// <bookstore>
//  <book>
//      <category>"education"</category>
//      <title lang="en">Everyday Italian</title>
//      <author>Giada De Laurentiis</author>
//      <year>2005</year>
//      <price>30.00</price>
//  </book>
//
//  <book category="children">
//      <title lang="en">Harry Potter</title>
//      <author>J K. Rowling</author>
//      <year>2005</year>
//      <price>29.99</price>
//  </book>
//
//  <book category="web">
//      <title lang="en">Learning XML</title>
//      <author>Erik T. Ray</author>
//      <year>2003</year>
//      <price>39.95</price>
//  </book>
// </bookstore>
// Valid xml present
class Solution {
    public TreeNode convertXMLIntoTree(Tag[] xml) {
        Stack<TreeNode> stack = new Stack<>();

        for (int i = 0; i < xml.length; i++) {
            if (xml[i].isStartTag()) {
                TreeNode node = new TreeNode(xml[i]);
                stack.push(node);
                prev = node;
            } else if (xml[i].isContent()){
                TreeNode node = stack.peek();
                node.val = xml[i];
            } else {
                TreeNode node = stack.pop();

                if (stack.isEmpty()) return node; //root node
                if (!.stack.isEmpty()) {
                    stack.peek().addChild(node);
                }
            }
        }
    }


    public String convertXMLTreeToXML(TreeNode root) {
        if (root == null) return "";

        String partialString = "";
        partialString += "<" + root.tagName + ">";
        if (root.hasValue()) partialString += root.value;
        if (root.children != null) {
            for (int i = 0; i < root.children.length; i++) {
                partialString += convertXMLTreeToXML(root.children[i]);
            }
        }

        partialString += "</" + root.tagName + ">";
        return partialString;
    }

}

class TreeNode {
    private String tag;
    private List<TreeNode> children;


    public TreeeNode(String tag) {
        this.tag = tag;
        this.children = new ArrayList<>();
    }

    public void addChild(TreeNode child) {
        this.children.add(child);
    }
}