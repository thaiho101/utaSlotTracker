<?php
// Start the session
// session_start();
?>
<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local UTA Website</title>
    <link rel='stylesheet' href='styles.css'>
    <style>
        iframe {
            width: 100%;
            height: 100vh;
        }
        button {
            margin-top: 20px;
            padding: 10px;
        }
    </style>
</head>
<body>
    <!-- Embed UTA Website -->
<dialog id="noticeModal" <?php //echo $validClose;?>>
	<div id='noticeModalContentCover'>
		<div id='noticeModalContent'>
			<div class='noticeModalContentAlignment'>
                <div class='secondLine'></div>
				<div class='topLine'></div>
				<div class='closeNoticeModalDiv'>
					<form action="" method="post">
						<button type='submit' id="closeModal" name='closeNoticeModal' class="button okayNoticeButton">OK</button>
					</form>
				</div>

				<div id="dataSecurityInfo">
					<div class='noticeContent'>
						<div class='summaryTitleStyle' style='height: 35px;'>Summary:</div>
						<div>This page is part of the UTA Parking management platform designed to track and manage available parking slots in each parking building at UT Arlington. 
						</div>
						<div style='height: 10px;'></div>
						<div>
                        The interface provides real-time tracking of available and unavailable parking slots for each building.
						</div>
						
						<div class='keyFeatureTitleStyle'  style='height: 15px; padding-top: 10px;'>Key Features:</div>
						<div class='verticalSpace5px'></div>
						<div class='displayFlexRow'>
							<div class='fontBoldandWidth'> • Real-Time Tracking:</div> 
							<div class='leftAlignment'>View the number of available parking slots in real-time for each parking building.</div>
						</div>
						<div class='verticalSpace5px'></div>
						<div class='displayFlexRow'>
							<div class='fontBoldandWidth'> • Level Breakdown:</div> 
							<div class='leftAlignment'>Detailed view of available parking slots by level within each building.</div>
						</div>
						<div class='verticalSpace5px'></div>
						<div class='displayFlexRow'>
							<div class='fontBoldandWidth'> • Outdoor Parking Overview:</div> 
							<div class='leftAlignment'>Display the total number of available and unavailable outdoor parking slots.</div>
						</div>
						<!-- <div class='verticalSpace5px'></div>
						<div class='displayFlexRow'>
							<div class='fontBoldandWidth'> • Data Reporting:</div> 
							<div class='leftAlignment'>Option to generate CSV files of employee data.</div>
						</div>
						<div class='verticalSpace5px'></div>
						<div class='displayFlexRow'>
							<div class='fontBoldandWidth'> • Visualization:</div> 
							<div class='leftAlignment'>A graph of the most frequent weekdays for voucher usage, with an analysis of time behavior for male and female customers from selection to checkout.</div>
						</div> -->
						<div class='verticalSpace5px' style='height: 50px;'></div>
						<div id='notice'>
							<div id='noticeContent'>
								<div style='height: 3px;'></div>
								<div class='noticeTitleStyle'>Notice:</div>
								<div class='verticalSpace5px'></div>
								<div class='italicStyle'>The parking data included in the example is fictional and intended for usage only.</div>
								<div class='verticalSpace5px'></div>
							</div>
						</div>
                        <div class='noticeFooter' style='margin-top: 100px;'>Designed and Developed by Nam Ho</div>
                        <div class='noticeFooter'>UTA Parking Management Tool</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </dialog>

     <div id='utaEmbedded'>
        <iframe src="https://www.uta.edu/maps" id="utaFrame"></iframe>
     </div>
     <button id="buttons"></button>

<div id="smallScreenNotice">
    <div class="noticeContentBox">
        <h2>Limited Mobile Support</h2>
        <p>
            This application is a prototype currently developed and optimized for <strong>laptop and desktop environments</strong>.
        </p>
        <p>
            Access on smaller devices such as phones or tablets is not supported at this stage. Full functionality may not be available.
        </p>
        <p class='orangeWords'>
            Please switch to a larger screen for full access to all features.
        </p>
        <p class="noticeSignature">— Nam Ho | UTA Parking Management Tool</p>
    </div>
</div>

    <script src='script.js'></script>
</body>
</html>
