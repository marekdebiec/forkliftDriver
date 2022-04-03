using UnityEngine;
using System.Collections;

//CarController1.js


public class CarController3 : MonoBehaviour {
	
	public float enginePower = 150.0f;
	public float power = 0.0f;
	public float brake = 0.0f;
	public float steer = 0.0f;
	public float maxSteer = 25.0f;
	public WheelCollider FrontLeft;
	public WheelCollider FrontRight;
	public WheelCollider RearLeft;
	public WheelCollider RearRight;
	
	void Start()
	{
		GetComponent<Rigidbody>().centerOfMass=new Vector3(0f,-0.5f,0.3f);
	}
	
	void Update ()
	{
		power=Input.GetAxis("Vertical") * enginePower * Time.deltaTime * 250.0f;
		steer=Input.GetAxis("Horizontal") * maxSteer;
		brake=Input.GetKey("space") ? GetComponent<Rigidbody>().mass * 0.1f: 0.0f;
		
		FrontLeft.steerAngle=steer;
		FrontRight.steerAngle=steer;
		
		if(brake > 0.0)
		{
			FrontLeft.brakeTorque=brake;
			FrontRight.brakeTorque=brake;
			RearLeft.brakeTorque=brake;
			RearRight.brakeTorque=brake;
			RearLeft.motorTorque=0.0f;
			RearRight.motorTorque=0.0f;
		}
		else
		{
			FrontLeft.brakeTorque=0;
			FrontRight.brakeTorque=0;
			RearLeft.brakeTorque=0;
			RearRight.brakeTorque=0;
			RearLeft.motorTorque=power;
			RearRight.motorTorque=power;
		}
	}
	
}


