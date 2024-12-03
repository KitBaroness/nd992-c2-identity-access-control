{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "LegacyDeveloperBucketAccess",
			"Effect": "Allow",
			"Action": [
				"s3:GetObject",
				"s3:PutObject"
			],
			"Resource": "arn:aws:s3:::legacy-developer-bucket/*",
			"Condition": {
				"StringEquals": {
					"s3:ExistingObjectTag/Role": "developer"
				}
			}
		},
		{
			"Sid": "CloudWatchAccess",
			"Effect": "Allow",
			"Action": [
				"cloudwatch:Get*",
				"cloudwatch:List*",
				"cloudwatch:Describe*"
			],
			"Resource": "*"
		},
		{
			"Sid": "EC2Access",
			"Effect": "Allow",
			"Action": [
				"ec2:Describe*"
			],
			"Resource": "*"
		},
		{
			"Sid": "ListS3BucketsAccess",
			"Effect": "Allow",
			"Action": "s3:ListAllMyBuckets",
			"Resource": "*"
		},
		{
			"Sid": "ExplicitlyDenyAccess",
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
		}
	]
}