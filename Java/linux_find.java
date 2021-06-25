class File {
    String name;
    int size;
    int type;
    boolean isDirectory;
    File[] children;
}



abstract class Filter {
    abstract boolean apply(File file);
}

class MinSizeFilter extends Filter {

    int minSize;

    public MinSizeFilter(int minSize) {
        this.minSize = minSize;
    }

    @Override
    boolean apply(File file) {
        return file.size > minSize;
    }
}

class TypeFilter extends Filter {

    int type;

    public TypeFilter(int type) {
        this.type = type;
    }

    @Override
    boolean apply(File file) {
        return file.type == type;
    }
}

class FindCommand {

    public List<File> findWithFilters(File directory, List<Filter> filters) {
        if (!directory.isDirectory) {
            return new NotADirectoryException();
        }
        List<File> output = new ArrayList<>();
        findWithFilters(directory, filters, output);
        return output;
    }

    private void findWithFilters(File directory, List<Filter> filters, List<File> output) {
        if (directory.children == null) {
            return;
        }
        for (File file : directory.children) {
            if (file.isDirectory) {
                findWithFilters(file, filters, output);
            } else {
				// 判断file是不是符合条件
                boolean selectFile = true;
                for (Filter filter : filters) {
                    if (!filter.apply(file)) {
                        selectFile = false;
                    }
                }
				// 如果所有的FILTER都通过符合条件
				// 加入到RESULT
                if (selectFile) {
                    output.add(file);
                }
				
            }
        }
    }
}

class Solution {
    List<File> files = ".exe"
    File[] children = new File[](3);
    children[0] = new File("1.exe", false, "5mb", null);
    children[1] = new File("1.txt", false, "10mb", null);
    children[2] = new File("gtx.exe", false, "100mb", null);
    File root = new File("Desktop", true, children);

    public static void main(String[] args){
       
       FindCommand fc = new FindCommand();
       Filter f = new TypeFilter(1);
       Filter ff = new MinSizeFilter(10mb);
       //1. exe
       //2. txt
       
       List<Filter> filters = new ArrayList<>();
       filters.add(f);
       filters.add(ff);

       List<File> files = fc.findWithFilters(root, filters));

    }

}
