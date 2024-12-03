{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "DenyAllOutsideRequestedRegions",
			"Effect": "Deny",
			"Action": "*",
			"Resource": "*",
			"Condition": {
				"StringNotEquals": {
					"aws:RequestedRegion": [
						"us-east-1",
						"us-east-2",
						"us-west-1",
						"us-west-2"
					]
				}
			}
		},
		{
			"Sid": "DenyS3AccessExceptSpecificBuckets",
			"Effect": "Deny",
			"Action": "s3:*",
			"Resource": "*",
			"Condition": {
				"StringNotLike": {
					"s3:ResourceAccount": [
						"analytics-report-bucket",
						"legacy-developer-bucket"
					]
				}
			}
		}
	]
}