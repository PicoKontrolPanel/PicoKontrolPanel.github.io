using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class SendCommandSlider : MonoBehaviour
{
    private string sliderName;
    [SerializeField] private TMP_Text tmpTextRed;
    [SerializeField] private TMP_Text tmpTextWhite;

    public void Initialize(string name)
    {
        sliderName = name;
        tmpTextRed.text = name;
        tmpTextWhite.text = name;
    }

    public void OnSliderValueChanged(float value)
    {
        if (!string.IsNullOrEmpty(sliderName))
        {
            var draggable = GetComponent<DraggableUIBase>();
            if (draggable != null && draggable.IsEditModeEnabled)
                return;

            string command = $"slider,{sliderName}:{value}\n";
            AppManager.Instance.SendCommandToBLEDevice(command);
        }
    }

    public string GetCommandName()
    {
        return sliderName;
    }
}
