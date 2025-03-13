package anagram;

import java.util.ArrayList;
import java.util.List;

public class Employee {
	private int id;
	private String Name;
	private double Salary;
	
	public Employee(int id, String name, double salary) {

		this.id = id;
		this.Name = name;
		this.Salary = salary;
	}
	public void displayDetails() {
		
		System.out.println("Employee id:" + id);
		System.out.println("Employee Name :" + Name);
		System.out.println("Employee Salary:"+ Salary);
		System.out.println(" ");
	}
	
	 public static void main(String[] args) {
		Employee emp1 = new Employee(1,"vamshi",20000);
		Employee emp2 = new Employee(2,"krishna",30000);
		Employee emp3 = new Employee(3,"ramavath",40000);
		
		  List<Employee> employeeList = new ArrayList<>();
	        employeeList.add(emp1);
	        employeeList.add(emp2);
	        employeeList.add(emp3);

	       
	        System.out.println("Employee Details:");
	        for (Employee emp : employeeList) {
	            emp.displayDetails();
	        }
	}
}

