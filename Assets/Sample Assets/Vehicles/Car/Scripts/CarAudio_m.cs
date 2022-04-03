using UnityEngine;

[RequireComponent(typeof(AudioSource))]
public class CarAudio_m : MonoBehaviour {





    public AudioClip cos;   
	public AudioClip cos2; 

                                                         
	void Update () {   
			AudioSource audio = GetComponent<AudioSource>();
			audio.clip = cos;
			//audio.Play();
			//cos.Play();
			//cofanie = SetUpEngineAudioSource(cos);
	}
//	AudioSource SetUpEngineAudioSource(AudioClip clip)
//	{
//
//	}
}
