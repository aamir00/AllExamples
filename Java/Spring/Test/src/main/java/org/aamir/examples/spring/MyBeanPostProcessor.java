package org.aamir.examples.spring;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class MyBeanPostProcessor implements BeanPostProcessor {

    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        //called before initialization of the Bean
        System.out.println("Inside pre BeanProcessor " + beanName);
        return bean;
    }

    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {

        //called after initialization of the Bean
        System.out.println("Inside post BeanProcessor " + beanName);
        return bean;
    }
}
