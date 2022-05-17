def get_wifi_interface():
    wifi = PyWiFi()
    if len(wifi.interfaces()) <= 0:
        print u'Wireless card interface not found!'
        exit()
    if len(wifi.interfaces()) == 1:
        print u'Wireless card interface: %s'%(wifi.interfaces()[0].name())
        return wifi.interfaces()[0]
    else:
        print '%-4s   %s'%(u'Serial number',u'Network card interface name')
        for i,w in enumerate(wifi.interfaces()):
            print '%-4s   %s'%(i,w.name())
        while True:
            iface_no = raw_input('Please select network card interface serial number:'.decode('utf-8').encode('gbk'))
            no = int(iface_no)
            if no>=0 and no < len(wifi.interfaces()):
                return wifi.interfaces()[no]