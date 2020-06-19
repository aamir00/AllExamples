package org.aamir.examples.spring;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

    public static void main(String[] args) {

        AbstractApplicationContext factory = new ClassPathXmlApplicationContext("spring.xml");
        factory.registerShutdownHook();


        System.out.println("\n ------------------------------------------------\n");

        Student student = (Student) factory.getBean("student");
        student.setName("Rashid Khan");
        student.getVehicles().get(0).setName("Tata");
        student.display();

        System.out.println("\n ---------------  CODING - TO - INTERFACES  ---------------------------------\n");

        User student1 = (User) factory.getBean("student1");
        student1.printUserDetails();
        System.out.println("\n ------------------------------------------------\n");

        Vehicle vehicle = (Vehicle) factory.getBean("vh1");

        System.out.println(vehicle.getName());  // prints tata
        System.out.println("\n ------------------------------------------------\n");

        System.out.println("\n ---------------  Autowired and Qualifier  ---------------------------------\n");


   /* Below doesn't work

       @Autowired
        Qualifier("student1");
        User user;
        user.printUserDetails();

     */

        System.out.println("\n -------------------------  Department Component Bean  -----------------------\n");

        Department department = (Department) factory.getBean("department");
        System.out.println("Department Id : " + department.getId() + ", Department Name: " + department.getDept_name() );


        System.out.println("\n ---------------  Messaging  ---------------------------------\n");

        System.out.println(factory.getMessage("hello",null, "SSS", null));

    }
}
