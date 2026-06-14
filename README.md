
This is a KWin script that repositions the on-screen display that pops up when changing volume/brightness.

For those who get annoyed by how close to the center of the screen the OSD is.

<ins>**With this script:**</ins>

<img width="2560" height="1440" alt="with" src="https://github.com/user-attachments/assets/e5fa33c0-01da-45e2-82f4-d1156156526d" />

------------

<ins>**KDE default without this script:**</ins>

<img width="2560" height="1440" alt="without" src="https://github.com/user-attachments/assets/c381d300-5efe-4918-abec-8c4db6f905a5" />

------------

<ins>**Installation:**</ins>

1. Download and extract the files.
2. Run <ins>kpackagetool6 -t KWin/Script -i ~/Downloads/reposition-osd-kde</ins> in your terminal.
3. Navigate to **System Settings -> Window Management -> KWin Scripts** and check the box next to **Reposition OSD** and then click **Apply**.
4. All done! Now you can delete ~/Downloads/reposition-osd-kde if you want to.

  >note: to uninstall run  <ins>**rm -rf ~/.local/share/kwin/scripts/reposition-osd-kde**</ins>

------------

<ins>**Customization:**</ins>

 - If the position I chose is too low for your liking then you can change it by editing the following value in _**main.js**_

  <img width="698" height="370" alt="scale" src="https://github.com/user-attachments/assets/94d8c242-679a-4125-b326-4109bb99ad3c" />

  >It is set to 0.9 by default but it can be set to any value between 0 and 1. Setting it closer to 1 will move the OSD closer to the bottom of your screen.
 - **Important:** If you already had the script installed before you made any changes you will have to run <ins>**rm -rf ~/.local/share/kwin/scripts/reposition-osd-kde**</ins> and then follow the steps in the <ins>**Installation**</ins> section again.
