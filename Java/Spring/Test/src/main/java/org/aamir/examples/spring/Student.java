package org.aamir.examples.spring;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.MessageSource;
import sun.plugin2.message.Message;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.List;

public class Student implements User, ApplicationContextAware, BeanNameAware, InitializingBean, DisposableBean {

    private String name;
    private int id;
    private Subject subject;
    private List<Vehicle> vehicles;
    private ApplicationContext applicationContext = null;
    private String beanName;
    private MessageSource messageSource;

    public MessageSource getMessageSource() {
        return messageSource;
    }

    @Autowired
    @Qualifier("messageSource")
    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }   

    public String getName() {
        return name;
    }

    public List<Vehicle> getVehicles() {
        return vehicles;
    }

    public void setVehicles(List<Vehicle> vehicles) {
        this.vehicles = vehicles;
    }

    @Required
    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public void display(){
        System.out.println(this.id + "\t" + this.name + "\t" + this.subject.name + "\n");
        for(Vehicle vehicle : vehicles) {
            System.out.println(vehicle.getId() + "\t" + vehicle.getName());
        }

    }

    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;

    }

    public void setBeanName(String s) {
        this.beanName = s;
    }

    public void afterPropertiesSet() throws Exception {
        // Method is called when the bean is intialized
        System.out.println("Properties of Student is set");
    }

    public void destroy() throws Exception {
        System.out.println("Inside destroy method of the Student ");
    }

    public void myInit() {
        System.out.println("Inside custom Init of the Student");
    }

    public void cleanup() {

        System.out.println("Inside cleanup of the Student");
    }


    public void printUserDetails() {
        this.display();
    }

    // Called after the bean is initialized

    @PostConstruct
    public void myInit2() {
        System.out.println("Inside custom Init 2 of the Student");
    }

    @PreDestroy
    public void customCleanup2(){
        System.out.println("Inside customCleanup2 of the Student");
    }
}
