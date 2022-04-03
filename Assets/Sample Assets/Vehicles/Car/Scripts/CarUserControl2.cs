using UnityEngine;

[RequireComponent(typeof(CarController))]
public class CarUserControl2 : MonoBehaviour
{
    private CarController car;  // the car controller we want to use
    
	public	bool nieMobilna;
	public Joystick joystick; 

    void Awake ()
    {
        // get the car controller
        car = GetComponent<CarController>();
    }


    void FixedUpdate()
    {
        // pass the input to the car!
#if CROSS_PLATFORM_INPUT
		float h = CrossPlatformInput.GetAxis("Horizontal");
		float v = CrossPlatformInput.GetAxis("Vertical");
#else
		float v = 0; // to ja dopisalem
		float h = 0; // to tez

		if (!nieMobilna) {
			//h = Input.GetAxis("Horizontal");
			h = -joystick.Horizontal;
			//v = Input.GetAxis("Vertical");
			v = joystick.Vertical;
		}
		//if (mobilna) {
			//h = -Input.acceleration.x;

			//if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Stationary) {
			//	v = Mathf.Round(Input.acceleration.y);
			//}
		//	else {
		//		v = Mathf.Round(-Input.acceleration.y);
		//	}
		//}
		if (nieMobilna)
        {
			h = Input.GetAxis("Horizontal");
			v = Input.GetAxis("Vertical") ;
		}



#endif
		car.Move(h,v);
    }
}
