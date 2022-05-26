import java.util.ArrayList;

public class ArrList {
    public static void main(String[] args) {
        ArrayList<Dog> dog = new ArrayList<Dog>();
        Dog macy = new Dog("Macy", Breed.CORGI, 2);
        dog.add(macy);

        Dog max = new Dog("Max", Breed.DOBERMAN, 4);
        dog.add(max);

        System.out.println(dog);

    }
}
