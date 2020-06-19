package org.aamir.examples.spring;

import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class Department {

    private int id;
    private String dept_name ;
    private String location ;

    @PostConstruct
    public void init() {
        this.id = 1;
        this.dept_name = "dept_name";
        this.location = "location";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDept_name() {
        return dept_name;
    }

    public void setDept_name(String dept_name) {
        this.dept_name = dept_name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
