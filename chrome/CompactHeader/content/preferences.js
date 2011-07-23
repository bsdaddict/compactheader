///////////////////////////////////////////////////////////////////////////////
//
//  preferences.js
//
//  Copyright 2005 by Michael Buschbeck <michael@buschbeck.net>
//
//  Preferences dialog box for the Unselect Message extension. Allows users to
//  customize the behavior of the extension.
//


///////////////////////////////////////////////////////////////////////////////
//
//  Variables
//


if(!org) var org={};
if(!org.mozdev) org.mozdev={};
if(!org.mozdev.compactHeader) org.mozdev.compactHeader = {};

org.mozdev.compactHeader.preferences = function() {
  var pub = {};
  var prefBranch;
  ///////////////////////////////////////////////////////////////////////////////
  //
  //  onLoad
  //
  //  Called when the preferences dialog has finished loading. Initializes the
  //  controls according to current configuration settings.
  //

  pub.onLoad = function()
  {
    prefBranch = Components.classes["@mozilla.org/preferences-service;1"]
      .getService(Components.interfaces.nsIPrefService)
      .getBranch("extensions.CompactHeader.");

    loadPrefCheckbox("headersize.twolineview", "checkboxCompactTwolineView");
    loadPrefCheckbox("headersize.linkify", "checkboxLinkify");
    //loadPrefInt("headersize.addressstyle", "AddressStyle");
    loadPrefCheckbox("headersize.addressstyle", "checkboxShowOnlyAddress");
    loadPrefCheckbox("headersize.flatButtons", "checkboxflatButtons");
  }

  ///////////////////////////////////////////////////////////////////////////////
  //
  //  onDialogAccept
  //
  //  Called when the preferences dialog is closed by pressing the OK button.
  //  Saves the configuration settings.
  //

  pub.onDialogAccept = function ()
  {
    savePrefCheckbox("headersize.twolineview", "checkboxCompactTwolineView");
    savePrefCheckbox("headersize.linkify", "checkboxLinkify");
    //savePrefInt("headersize.addressstyle", "AddressStyle");
    savePrefCheckbox("headersize.addressstyle", "checkboxShowOnlyAddress");
    savePrefCheckbox("headersize.flatButtons", "checkboxflatButtons");
    return true;
  }


  ///////////////////////////////////////////////////////////////////////////////
  //
  //  loadPrefCheckbox
  //
  //  Loads the given boolean preference value into the given checkbox element.
  //

  function loadPrefCheckbox(pref, idCheckbox)
  {
    document.getElementById(idCheckbox).checked = prefBranch.getBoolPref(pref);
  }


  function loadPrefInt(pref, idCheckbox)
  {
    document.getElementById(idCheckbox).value = prefBranch.getIntPref(pref);
  }

  ///////////////////////////////////////////////////////////////////////////////
  //
  //  savePrefCheckbox
  //
  //  Saves the given boolean preference value from the given checkbox element.
  //

  function savePrefCheckbox(pref, idCheckbox)
  {
    prefBranch.setBoolPref(pref, document.getElementById(idCheckbox).checked);
  }

  function savePrefInt(pref, idCheckbox)
  {
    prefBranch.setIntPref(pref, document.getElementById(idCheckbox).value);
  }
  return pub;
}();
